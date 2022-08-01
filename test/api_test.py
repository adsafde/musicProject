import json
import unittest
import requests


class MyTestCase(unittest.TestCase):
    def setUp(self) -> None:
        super().setUp()
        self.data = requests.get('http://127.0.0.1:8000/api/data/1')

    def test_something(self):
        self.assertEqual(json.loads(self.data.text)['name'],
                         "my name is dynamic 1")

    def test_gethottype(self):
        print(self.data.status_code)
        self.assertEqual(self.data.status_code, 200)
