import { pool } from "../db.js";

//Listar Empleados

const getEmpleados = async(req,res)=> {

  try {
    const [rows] = await pool.query("SELECT * FROM empleado");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "No existe la lista de empleados" });
  }

};

//Agregar Empleado

const addEmpleado = async(req,res)=> {

  try {
    const {Nombre,Salario} = req.body;
    const [rows] = await pool.query("INSERT INTO empleado(Nombre , Salario) VALUES (?, ?)",[Nombre,Salario]);
    res.json([{message: "Registro Insertado",  id: rows.insertId , Nombre, Salario},rows]);
  } catch (error) {
    return res.status(500).json({ message: "Algo anda Mal" });
  }
};

//Listar Por Id Empleado

const getEmpleado = async(req,res)=> {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM empleado WHERE Id_Empleado = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo anda Mal" });
  }
};

//Eliminar Empleado
export const deleteEmpelado = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("DELETE FROM empleado WHERE Id_Empleado = ?", [id]);
    res.json({message: "Empleado Eliminado"});

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "algo anda mal" });
  }
};

//Actualizar Empleado en un campo determinado

export const updateEmpleado = async (req, res) => {

  const { id } = req.params;
  const { Nombre, Salario } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE empleado SET Nombre = IFNULL(?, Nombre), Salario = IFNULL(?, Salario) WHERE Id_Empleado = ?",
      [Nombre, Salario, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Empleado no encontrado" });

    const [rows] = await pool.query("SELECT * FROM empleado WHERE Id_Empleado = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "algo anda mal" });
  }
};

export const methods = {
  getEmpleados,
  addEmpleado,
  updateEmpleado,
  deleteEmpelado,
  getEmpleado
};

