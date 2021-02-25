//At first we decided to start with re writing all those codes with more simple and readable way for us. 

const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall" 
  ];   // ---> const roads we left the same way
 /* function buildGraph(edges){
    let graph = {};
    for(let [from, to] of edges.map(road=>road.split("-"))){
        addEdge(from, to);
        addEdge(to,from);
    }
    function addEdge(from,to){
        if(graph[from]==null){
            graph[from]=[to];
        }else{
            graph[from].push(to);
        }
    }
    return graph;
}
console.log(buildGraph(roads)); */

function buildGraph(edges){ //(2)
    let graph = {};//(3) it creats a empty object,(8)here graph = "Alice's House": [ "Bob's House" ], (10) here graph = "Bob's House": [ "Alice's House" ]
    let splitarr = edges.map(element=>element.split("-"));/*(4) hier each element will be for instance [[ "Alice's House", "Bob's House" ],...]*/
    for(let [from, to] of splitarr){//(5)
        addEdge(from, to);// (6)
        addEdge(to,from);//(9)
    }
    function addEdge(from,to){//
        if(graph[from]==null){ //
            graph[from]=[to];//(7)
        }else{
            graph[from].push(to);//
        }
    }
    return graph;
}
console.log(buildGraph(roads));//(1) the function is called







/*

class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place != this.place) return p;
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
      }
    }
  }



  let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
  );
  let next = first.move("Alice's House");*/








 


  /*function one(route){
      let objectarr = [];
      for(let i = 0; i < route.length; i++){

          objectarr.push(route[i].split("-"))
      }
      return objectarr;
  }
  let roads1 = ((one(roads)).flat());    //--> this is our function that creates and array that stores strings as keys
  console.log(roads1)

  //[alice hous:[bob hous,cabin,post office],bob hour: [town hall ,  alice hous]]


  
  function two(route){
  let result = [];
  for(let i = 0; i < route.length; i = i+2){
    result.push(route[i])
}
return result;
 }
 
  let from = two(roads1).sort()
  console.log(from)




  function toFunct(route){
    let result = [];
    for(let i = 1; i < route.length; i = i+2){
      result.push(route[i])
  }
  return result;
  
   }
    let to = toFunct(roads1).sort()
  console.log(to)


function final(){
    let result = [];
    for(let i = 0; i < from.length; i ++){
        if(from[i]==from[i+1]) {
            result[from[i]]= [];
            result[from[i]].push(to[i]);
            result[from[i]].push(to[i+1]);
        }
        
    }
    return result;
}  
console.log(final())





 let c = [];
 c["hermann"]= []
 c["hermann"].push(2)
 c["hermann"].push(3)
 console.log(c)*/



















//   //two

//   function buildGraph(edges) {
//     let graph = Object.create(null);
//     function addEdge(from, to) {
//       if (graph[from] == null) {
//         graph[from] = [to];
//       } else {
//         graph[from].push(to);
//       }
//     }
//     for (let [from, to] of edges.map(r => r.split("-"))) {
//       addEdge(from, to);
//       addEdge(to, from);
//     }
//     return graph;
//   }
  
//   const roadGraph = buildGraph(roads);
// //three

// class VillageState {
//     constructor(place, parcels) {
//       this.place = place;
//       this.parcels = parcels;
//     }
  
//     move(destination) {
//       if (!roadGraph[this.place].includes(destination)) {
//         return this;
//       } else {
//         let parcels = this.parcels.map(p => {
//           if (p.place != this.place) return p;
//           return {place: destination, address: p.address};
//         }).filter(p => p.place != p.address);
//         return new VillageState(destination, parcels);
//       }
//     }
//   }
//   // four

//   let first = new VillageState(
//     "Post Office",
//     [{place: "Post Office", address: "Alice's House"}]
//   );
//   let next = first.move("Alice's House");
  
//   console.log(next.place);
//   // → Alice's House
//   console.log(next.parcels);
//   // → []
//   console.log(first.place);
//   // → Post Office
  
  
//   // five
//   let object = Object.freeze({value: 5});
//   object.value = 10;
//   console.log(object.value);
  

//   // six

//   function runRobot(state, robot, memory) {
//     for (let turn = 0;; turn++) {
//       if (state.parcels.length == 0) {
//         console.log(`Done in ${turn} turns`);
//         break;
//       }
//       let action = robot(state, memory);
//       state = state.move(action.direction);
//       memory = action.memory;
//       console.log(`Moved to ${action.direction}`);
//     }
//   }

//   //seven 
//   function randomPick(array) {
//     let choice = Math.floor(Math.random() * array.length);
//     return array[choice];
//   }
  
//   function randomRobot(state) {
//     return {direction: randomPick(roadGraph[state.place])};
//   }
  
//   // eight

//   VillageState.random = function(parcelCount = 5) {
//     let parcels = [];
//     for (let i = 0; i < parcelCount; i++) {
//       let address = randomPick(Object.keys(roadGraph));
//       let place;
//       do {
//         place = randomPick(Object.keys(roadGraph));
//       } while (place == address);
//       parcels.push({place, address});
//     }
//     return new VillageState("Post Office", parcels);
//   };

//   // nine

//   runRobot(VillageState.random(), randomRobot);

//   //ten

//   const mailRoute = [
//     "Alice's House", "Cabin", "Alice's House", "Bob's House",
//     "Town Hall", "Daria's House", "Ernie's House",
//     "Grete's House", "Shop", "Grete's House", "Farm",
//     "Marketplace", "Post Office"
//   ];
//   function routeRobot(state, memory) {
//     if (memory.length == 0) {
//       memory = mailRoute;
//     }
//     return {direction: memory[0], memory: memory.slice(1)};
//   }
//   runRobotAnimation(VillageState.random(), routeRobot, []);

//   function findRoute(graph, from, to) {
//     let work = [{at: from, route: []}];
//     for (let i = 0; i < work.length; i++) {
//       let {at, route} = work[i];
//       for (let place of graph[at]) {
//         if (place == to) return route.concat(place);
//         if (!work.some(w => w.at == place)) {
//           work.push({at: place, route: route.concat(place)});
//         }
//       }
//     }
//   }

//   function goalOrientedRobot({place, parcels}, route) {
//     if (route.length == 0) {
//       let parcel = parcels[0];
//       if (parcel.place != place) {
//         route = findRoute(roadGraph, place, parcel.place);
//       } else {
//         route = findRoute(roadGraph, place, parcel.address);
//       }
//     }
//     return {direction: route[0], memory: route.slice(1)};
//   }

//   runRobotAnimation(VillageState.random(),
//                   goalOrientedRobot, []);