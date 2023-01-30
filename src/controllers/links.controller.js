import { pool } from "./../db.js";

const getPruebaLinks = async (req, res) => {
  const [result] = await pool.query(
    'select "Endpoint getPruebaLinks Funcionando" as result'
  );
  res.json(result[0]);
};

const AddLinks = async (req, res) => {
  const { title, url, description } = req.body;
  const newLink ={
    title,
    url,
    description
  }
  await pool.query('Insert Into links set ?',[newLink]);
  res.json([{message: "Link Agregado"},{newLink}]);
};

export const methods = {
  getPruebaLinks,
  AddLinks,
};
