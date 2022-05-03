import { getStorage, ref, uploadBytesResumable,getDownloadURL  } from "firebase/storage";

type Proposal = {
  name: string;
  email: string;
  comments: string;
  url?: string;
};

export const postImageProposal = async (file: any) => {
  const storage = getStorage();
  const storageRef = ref(storage, "images/"+file.name);
  if (file !== null || file !== undefined) {
    try{

      const snapshot = await uploadBytesResumable(storageRef, file, file.type);
      console.log("An image has been uploaded"+snapshot.metadata);
      const urlImage = getDownloadURL(snapshot.ref)
      return urlImage
    }catch(e){
      console.log(e)
    }
  }
};
