# import of required libraries
import requests
import pygsheets
import os
import numpy as np

# setting global resources

PARAMS = {
    "Accept": "application/vnd.github+json",
    "Authorization": "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"
}

padawan = {
    'name': '',
    'type': 'internal training',
    'yoda_1': '',
    'yoda_2': '',
    'yoda_3': '',
    'yoda_4': '',
    'source': '',
    'ticket': '',
    'manager': '',
    'request_date': '',
    'approval_date': '',
    'kick_off_date': '',
    'badge_q': '',
    'badge_year': '',
    'track_topic': '',
    'track_level': '',
    'status': 'IN PROGRESS'
}

client = pygsheets.authorize(
    service_account_file="git-python-sheets-test-0583fafde0e0.json")

padawan_sheet = client.open_by_url(
    'https://docs.google.com/spreadsheets/d/1kQPLN_hI4-4fxWre87RWNOb6WSXzuPYMh2tq9OuljiU/'
)

worksheet = padawan_sheet.worksheet_by_title('Sheet1')

# input_variable = os.environ['INPUT_STORE']

input_variable = '27'

print("Input Variable:", input_variable)

rq = requests.get(
    'https://api.github.com/repos/Palfonsoag/brigada-juvenil-api/issues/' +
    input_variable)

issue = rq.json()


def insertOnLastRow(new_row):
    rows_length = len(worksheet.get_values([1, 1], [None, 17]))
    worksheet.insert_rows(rows_length, values=[new_row], inherit=True)
    worksheet.adjust_column_width(1, 18, None)


def getNameTechAndLevel(title):
    splitted_info = title.split('-')
    tech_level = splitted_info[1].split()
    padawan['name'] = splitted_info[0]
    padawan['track_topic'] = tech_level[0]
    padawan['track_level'] = tech_level[1]


def getYodas(details):
    yodas_idx = details.find('Yodas (in no particular order):')
    task_idx = details.find('Task list:')
    yodas_string = details[yodas_idx:task_idx].split(':')
    yodas = yodas_string[1].split('\r\n- ')
    cont = 1
    for yoda in yodas[1:len(yodas)]:
        padawan['yoda_' + str(cont)] = yoda
        cont += 1


def getManager(details):
    manager_idx = details.find('PM account tag:')
    tech_idx = details.find('- Technology:')
    manager_string = details[manager_idx:tech_idx].split(':')
    padawan['manager'] = manager_string[1]


# attributes to use:
# body
# url
# title

issue_details = issue['body']

padawan['ticket'] = issue['url']

issue_title = issue['title']

issue_date = issue['created_at'].split('T')[0]

padawan['request_date'] = issue_date

# print(issue_details)

getYodas(issue_details)

getNameTechAndLevel(issue_title)

getManager(issue_details)

#print(padawan)

padawan_list = padawan.items()

data = list(padawan_list)

padawan_array = np.array(data)

new_row = []

for att in padawan_array:
    new_row.append(att[1])

insertOnLastRow(new_row)