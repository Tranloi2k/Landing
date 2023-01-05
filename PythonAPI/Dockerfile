# Set base image (host OS)
FROM python:3.8

# By default, listen on port 5000


# Set the working directory in the container
WORKDIR /app

COPY  . .

EXPOSE 5000
# Install any dependencies
RUN pip3 install -r requirements.txt

# Specify the command to run on container start
CMD [ "python3", "./app/main/main.py" ]