import { Router } from "express";
import { MembersRoutes } from "../constants";
import { registerMember } from "../controllers/members-controller";
import { getMemberFromRequest } from "../utils/members-utils";

const memberRoutes = Router();
memberRoutes.post(MembersRoutes.REGISTER_USER, (req, res) => {
  const memberToRegister = getMemberFromRequest(req.body);

  console.log("memberToRegister: ", memberToRegister);

  if (memberToRegister) {
    registerMember(memberToRegister).then((registeredMember) =>
      res.status(200).json(registeredMember)
    );
  } else {
    res.status(500).send("Invalid user details, unable to register user.");
  }
});

export default memberRoutes;
