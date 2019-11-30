FROM python:3.6

WORKDIR /service

# RUN source bin/activate
# RUN pip update -y && \ pip install -y python-pip python-dev
# RUN pip install python-pip python-dev
# RUN source bin/activate pip install -y python-pip python-dev

# We copy just the requirements.txt first to leverage Docker cache






COPY ./requirements.txt /service/requirements.txt
COPY ./config.py /service/config.py

RUN pip install -r requirements.txt

COPY . /service

CMD python app.py

EXPOSE 5000

ENTRYPOINT ["python", "app.py"]
