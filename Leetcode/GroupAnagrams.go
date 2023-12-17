func groupAnagrams(strs []string) [][]string {
    hm := make(map[string][]string)
    for _, w := range strs {
        key := sortString(w)
        hm[key] = append(hm[key], w)
    }
    
    var ans [][]string
    for _, words := range hm {
        ans = append(ans, words)
    }
    return ans
}

func sortString(str string) string {
    runes := []rune(str)
    sort.Slice(runes, func(a, b int) bool {
        return runes[a] < runes[b]
    })
    return string(runes)
}
