import  {db}  from "../../pages/Firebase/firebaseConfig";

import { collection, addDoc } from "firebase/firestore";

type Proposal = {
  name: string;
  email: string;
  comments: string;
  url?: string;
};

 const postProposal = async (proposal: Proposal) => {
  try {
    const collectionRef = collection(db, "/proposals");
    console.log(collectionRef);
    const newProposal = await addDoc(collectionRef, proposal);
    console.log("A new Proposal has been uploaded:"+newProposal.id)
    return newProposal
  } catch (e) {
    console.log(e);
  }
};

export default postProposal;
