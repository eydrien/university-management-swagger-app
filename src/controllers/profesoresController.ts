import { Profesores } from '../models/profesoresModel';
import { db } from '../../utils/db';
import { OkPacket, RowDataPacket } from 'mysql2';

export const create = (profesor: Profesores, callback: Function) => {
    const queryString = 'INSERT INTO profesores (id_p, nom_p, dir_p, tel_p, profesion) VALUES (?, ?, ?, ?, ?)';
 
    db.query(
        queryString,
        [profesor.id_p, profesor.nom_p, profesor.dir_p, profesor.tel_p, profesor.profesion],
        (err) => {
            if (err) { callback(err); }
 
            //const insertId = (<OkPacket>result).insertId;
            //callback(null, insertId); // Devuelve el ID del profesor creado
 
            callback(null, {
                statusCode: 201,
                message: 'Profesores creado exitosamente',
                data: {
                    id_p: profesor.id_p
                }
            });
        }
    );
};

//read
export const getAll = (callback: Function) => {
    const queryString = 'SELECT * FROM profesores';
   
    db.query(queryString, (err, result) => {
        if (err) { callback(err); }
       
        const rows = <RowDataPacket[]>result;
        const profesores: Profesores[] = [];
        rows.forEach(row => {
            const profesor: Profesores = {
                id_p: row.id_p,
                nom_p: row.nom_p,
                dir_p: row.dir_p,
                tel_p: row.tel_p,
                profesion: row.profesion
            };
            profesores.push(profesor);
        });
        callback(null, {
            statusCode: 200,
            message: 'Profesores obtenidos exitosamente',
            data: profesores
        });
    });
};

export const getOne = (id_p: number, callback: Function) => {
    const queryString = 'SELECT * FROM profesores WHERE id_p = ?';

    db.query(queryString, [id_p], (err, result) => {
        if (err) { callback(err); }
 
        const row = (<RowDataPacket[]>result)[0];
        if (row) {
            const profesor: Profesores = {
                id_p: row.id_p,
                nom_p: row.nom_p,
                dir_p: row.dir_p,
                tel_p: row.tel_p,
                profesion: row.profesion
            };
            callback(null, {
                statusCode: 200,
                message: 'profesor obtenido exitosamente',
                data: profesor
            });
        } else {
            callback(null, {
                statusCode: 404,
                message: 'profesor no encontrado'
            });
        }
    });
}

//update
export const update = (profesor: Profesores, callback: Function) => {
    const queryString = 'UPDATE profesores SET nom_p = ?, dir_p = ?, tel_p = ?, profesion = ? WHERE id_p = ?';
 
    db.query(
        queryString,
        [profesor.nom_p, profesor.dir_p, profesor.tel_p, profesor.profesion, profesor.id_p],
        (err) => {
            if (err) { callback(err); }
 
            callback(null, {
                statusCode: 200,
                message: 'Profesor actualizado exitosamente',
                data: {
                    id_p: profesor.id_p
                }
            });
        }
    );
};

//Remove
export const remove = (id_p: number, callback: Function) => {
    const queryString = 'DELETE FROM profesores WHERE id_p = ?';
 
    db.query(queryString, [id_p], (err) => {
        if (err) { callback(err); }
 
        callback(null, {
            statusCode: 200,
            message: 'Profesor eliminado exitosamente'
        });
    });
};