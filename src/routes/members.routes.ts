import { Router } from "express";
import { MembersRoutes } from "../constants";

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */
const memberRoutes = Router();

memberRoutes.post(MembersRoutes.REGISTER_USER, (req, res) => {
  const memberToRegister = req.body;

  console.log("memberToRegister: ", memberToRegister);

  if (memberToRegister) {
  } else {
    res.status(400).send("Invalid user details, unable to register user.");
  }
});

export default memberRoutes;
