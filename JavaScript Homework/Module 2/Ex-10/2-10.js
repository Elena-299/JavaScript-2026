candidates = [];

let num = prompt("How many candidates candidates");
for (let i=0;i<num;i++) {
    let name = prompt("Name of the candidate");
    candidates.push({
        name:name,
        votes:0
    })
}

let voters = prompt("How many voters");
for (let i=0; i<voters; i++) {
    let vote_name = prompt("Who do you vote for");
    let candidate = candidates.find(c => c.name === vote_name);
    if (candidate) {
        candidate.votes += 1;
    }
}
candidates.sort((a, b) => {
   return b - a;
})

console.log(`Winner is: ${candidates[0].name} with ${candidates[0].votes}`);
candidates.sort((a, b) => a-b);
console.log(candidates);