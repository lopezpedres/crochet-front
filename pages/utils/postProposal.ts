import { db } from "../../pages/Firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

type Proposal = {
  name: string;
  email: string;
  comments: string;
  url?: string;
};

export const postProposal = async (proposal: Proposal) => {
    console.log(proposal)
  try {
    const newProposal = await addDoc(collection(db, "proposals"), proposal);
    console.log("A new Proposal has been updated:"+newProposal.id)
    return newProposal
  } catch (e) {
    console.log(e);
  }
};
