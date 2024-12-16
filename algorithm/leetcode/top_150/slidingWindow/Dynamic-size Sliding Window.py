def min_subarray_len(s, arr):
    n = len(arr)
    min_length = float("inf")
    window_sum = 0
    left = 0

    for right in range(n):
        window_sum += arr[right]

        while window_sum >= s:
            min_length = min(min_length, right - left + 1)
            window_sum -= arr[left]
            left += 1

    return min_length if min_length != float("inf") else 0


arr = [2, 3, 1, 2, 4, 3]
s = 7
print(min_subarray_len(s, arr))  # Output: 2 (subarray [4, 3])
