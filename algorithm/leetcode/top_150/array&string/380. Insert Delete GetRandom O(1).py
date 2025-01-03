import random


class RandomizedSet:

    def __init__(self):
        self.set = {}
        self.arr = []

    def insert(self, val: int) -> bool:
        if not val in self.set:
            self.set[val] = len(self.arr)
            self.arr.append(val)
            return True
        return False

    def remove(self, val: int) -> bool:
        if val in self.set:
            di = self.set[val]
            dv = self.arr[di]

            n = len(self.arr)
            ci = self.set[self.arr[n - 1]]
            cv = self.arr[ci]

            self.arr[di] = cv
            self.set[cv] = di
            self.arr[n - 1] = dv
            self.arr.pop()
            del self.set[dv]

            return True
        return False

    def getRandom(self) -> int:
        return self.arr[random.randint(0, len(self.arr) - 1)]


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
