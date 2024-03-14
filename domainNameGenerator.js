let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for (let pro in pronoun){
    for (let ad in adj){
        for (let nou in noun){
            console.log(pronoun[pro]+adj[ad]+noun[nou]+".com")
        }
    }
}