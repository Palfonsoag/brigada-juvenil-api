# import of required libraries
import requests
import pygsheets
import os

# setting global resources

PARAMS = {
    "Accept": "application/vnd.github+json",
    "Authorization": "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"
}

client = pygsheets.authorize(
    service_account_file="git-python-sheets-test-0583fafde0e0.json")

padawan_sheet = client.open_by_url(
    'https://docs.google.com/spreadsheets/d/1kQPLN_hI4-4fxWre87RWNOb6WSXzuPYMh2tq9OuljiU/'
)

worksheet = padawan_sheet.worksheet_by_title('Sheet1')

input_variable = os.environ['INPUT_STORE']

print("Input Variable:", input_variable)

rq = requests.get(
    'https://api.github.com/repos/Palfonsoag/brigada-juvenil-api/issues/' +
    input_variable)

issue = rq.json()


def insertOnLastRow(new_row):
    rows_length = len(worksheet.get_values([1, 1], [None, 17]))
    worksheet.insert_rows(rows_length, values=[new_row], inherit=True)
    worksheet.adjust_column_width(1, 18, None)


def getComments(url):
    comments_rq = requests.get(url)
    coments = comments_rq.json()
    print(coments)


getComments(issue['comments_url'])
