from http import HTTPStatus
from dashscope import Application


def call_agent_app():
    response = Application.call(app_id='19881d3703494ad5b2f8593d900e37a5',
                                prompt='Introduce the capital of China',
                                api_key='sk-47fb69ec2b3141eeaf7ed46981433c53',)

    if response.status_code != HTTPStatus.OK:
        print('request_id=%s, code=%s, message=%s\n' % (response.request_id, response.status_code, response.message))
    else:
        print('request_id=%s\n output=%s\n usage=%s\n' % (response.request_id, response.output, response.usage))


if __name__ == '__main__':
    call_agent_app()