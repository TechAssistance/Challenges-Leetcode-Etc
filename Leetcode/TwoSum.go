func twoSum(nums []int, target int) []int {
    s := make(map[int]int)
    for idx, num := range nums {
        if pos, ok := s[target-num]; ok {
            return []int{pos, idx}
        }
        s[num] = idx
    }
    return []int{}
}
