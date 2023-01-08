export default function findResult(setFilterResult, results, current, ans) {
    setFilterResult(results.filter(result => {
        // result를 돌면서 그동안 선택한 answers와 일치하는 지 살핀다.
        // 일치하는 게 있으면 1점, 아니면 0점으로 점수를 낸다.
        // 이전 점수보다 높으면 그 result를 저장, 점수도 저장한다
        // 이 과정을 반복하여 가장 높은 점수를 가진 result를 반환한다.
        return true;
    }));
}