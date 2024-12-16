def max_sum_sub_array(arr, k):
    # 초기 윈도우 합을 구함
    window_sum = sum(arr[:k])
    max_sum = window_sum

    # 슬라이딩 윈도우 기법
    for i in range(k, len(arr)):
        # 윈도우를 한 칸 슬라이드 (맨 앞 요소 빼고, 새 요소 더함)
        window_sum += arr[i] - arr[i - k]
        # 최대 합을 갱신
        max_sum = max(max_sum, window_sum)

    return max_sum


# 예시 사용
arr = [2, 1, 5, 1, 3, 2]
k = 3
print(max_sum_sub_array(arr, k))  # 출력: 9
