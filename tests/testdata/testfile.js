export const filename  = {
    data1:{
    name : "testuser", 
    email : "test@mail.com"
    },
    data2:{
     name : "testuser1", 
    email : "test1@mail.com"   
    },
   data3:{
     name : "testuser2", 
    email : "test2@mail.com"   
    }
};
export function getdata(datasetname){
  const data1 = filename[datasetname]
  return data1
}