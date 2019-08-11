export const config = {
  "dev": {
    "username": "lbenzzine",
    "password": "udagrambenzzinedev",
    "database": "udagrambenzzinedev",
    "host": "udagrambenzzinedev.cmdc8tvhd923.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_reigion":"us-east-1",
    "aws_profile": "default",
    "aws_media_bucket":"udagram-s3"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "letslearn"
  }

}
