from setuptools import setup


setup(
    name='platziventas',
    version='0.1',
    py_modules=['platziventas'],
    install_requires=[
        'Click',
    ],
    entry_points='''
        [console_scripts]
        platziventas=platziventas:cli
    ''',
)