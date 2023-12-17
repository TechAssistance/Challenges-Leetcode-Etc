func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false;
    }
    count_s, count_t := [26]int{}, [26]int{}

    for i := range s { count_s [s[i]-'a']++ }
    for i := range t { count_t [t[i]-'a']++ }
    
    return count_s == count_t
}
