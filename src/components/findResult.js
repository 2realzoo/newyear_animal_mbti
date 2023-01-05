export default function findResult(setFilterResult, results, current, ans) {
    setFilterResult(results.filter(result => {
        if(result.matchAns[current]){
            return result.matchAns[current] === ans;
        }
        return true;
    }));
}