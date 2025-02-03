class Solution:
    def calcEquation(
        self, equations: List[List[str]], values: List[float], queries: List[List[str]]
    ) -> List[float]:
        result = []
        graph = {}

        for a, b in equations:
            if a not in graph:
                graph[a] = []
            if b not in graph:
                graph[b] = []

        for i in range(len(equations)):
            graph[equations[i][0]].append([values[i], equations[i][1]])
            graph[equations[i][1]].append([1 / values[i], equations[i][0]])

        def getResult(start, end):
            if start not in graph or end not in graph:
                return -1

            if start == end:
                return 1

            result = [-1]
            visit = {}

            for j in graph:
                if j not in visit:
                    visit[j] = False

            def dfs(start, end, amt):
                if start == end:
                    result[0] = amt
                    return
                if visit[start] == True:
                    return

                visit[start] = True
                for i in graph[start]:
                    dfs(i[1], end, amt * i[0])
                    visit[i[1]] == False

            dfs(start, end, 1)
            return result[0]

        print(graph)
        for x1, x2 in queries:
            result.append(getResult(x1, x2))

        return result

    def calcEquation1(
        self, equations: List[List[str]], values: List[float], queries: List[List[str]]
    ) -> List[float]:
        result = []
        graph = {}

        for i, v in enumerate(equations):
            if v[0] not in graph:
                graph[v[0]] = []
            if v[1] not in graph:
                graph[v[1]] = []
            graph[v[0]].append((values[i], v[1]))
            graph[v[1]].append((1 / values[i], v[0]))

        def bfs(query):
            if query[0] not in graph or query[1] not in graph:
                return -1
            if query[0] == query[1]:
                return 1

            q = deque()
            q.append((query[0], 1))
            visit = set()
            visit.add(query[0])
            while q:
                v, amt = q.popleft()
                for i in graph[v]:
                    if i[1] in visit:
                        continue
                    visit.add(i[1])
                    if i[1] == query[1]:
                        return amt * i[0]
                    q.append((i[1], amt * i[0]))

            return -1

        for query in queries:
            result.append(bfs(query))

        return result
