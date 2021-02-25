const _colorGenerator_ = ()=>{
  let value = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  let color = "#";
  for(let i = 0; i < 6; i++){
      let radom = Math.round(Math.random()*15);
      color = color + value[radom];
  }
  return color;
  }
  console.log(_colorGenerator_());