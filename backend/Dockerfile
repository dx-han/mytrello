FROM python:3.8.5
WORKDIR /backend
COPY requirements.txt /backend/
RUN pip install -r requirements.txt -i https://pypi.douban.com/simple/
COPY . /backend/
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
CMD ["gunicorn", "trello.wsgi:application","--bind", "0.0.0.0:8001"]
EXPOSE 8001

FROM redis
EXPOSE 6379