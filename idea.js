function well(x){
  let obj = {good:0, bad:0}
  for(let i=0; i<x.length;i++) obj[x[i]]+= 1
  if(obj["good"]== 0) return "Fail!"
  if(obj["good"] == 1 || obj["good"] == 2) return "Publish!"
  return "I smell a series!"
}