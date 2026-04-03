import json
import os
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource("dynamodb")
TABLE_NAME = os.environ["TABLE_NAME"]
COUNTER_ID = "total_visits"


def lambda_handler(event, context):
    table = dynamodb.Table(TABLE_NAME)

    # Atomic increment using ADD expression
    response = table.update_item(
        Key={"id": COUNTER_ID},
        UpdateExpression="ADD visit_count :inc",
        ExpressionAttributeValues={":inc": 1},
        ReturnValues="UPDATED_NEW",
    )

    count = int(response["Attributes"]["visit_count"])

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        "body": json.dumps({"visits": count}),
    }
