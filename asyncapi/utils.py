from myapp.view import df

h = df.to_dict('records')


class MyPage:
    def __init__(self, data, size):
        self.data = data
        self.size = size

    @property
    def page(self):
        return int(len(self.data) / self.size) + 1

    def page_data(self, page=1):
        if page > self.page:
            raise Exception('page not found')
        return self.data[(page - 1) * self.size:page * self.size]


mydf = MyPage(h, 20)
