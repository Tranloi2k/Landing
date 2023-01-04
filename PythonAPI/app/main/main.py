import service.product_service.product_services as pd_service
import service.news_service.news_service as new_service
from flask import Flask, abort, request, jsonify
from flask_httpauth import HTTPTokenAuth
from service.auth_service.auth_service import verify_auth_token, verify_password, generate_auth_token
from service.users_service.users_service import get_user_by_name, add_user
from flask_cors import CORS, cross_origin

app = Flask(__name__)
auth = HTTPTokenAuth('Bearer')
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@auth.verify_token
def verify_token(token):
    try:
        cf, user = verify_auth_token(token)
        print(user)
        return cf   
    except:
        return False

@app.route('/')
def index():
    return jsonify("Flash API Works")
    
@app.route('/login', methods=['POST','OPTIONS'])
@cross_origin(origin='*',headers=['Content-Type'])
def login():
    expire_in = 86400
    username = request.json.get('username')
    password = request.json.get('password')
    if username is None or password is None:
        return {'error: missing username or password'}
    user = get_user_by_name(username)[0] 
    if verify_password(user['HashPassword'], password):
        token, expire = generate_auth_token(str(user['UserId']), expire_in)
        return {'token': token, 'login': 'true', 'expire': expire}
    return {''}

@app.route('/user', methods=['POST'])
@auth.login_required
def create_user():
    username = request.json.get('username')
    password = request.json.get('password')
    if username is None or password is None:
        return 'missing arguments'
    if len(get_user_by_name(username)) != 0 :
        return 'user name exist'
        
    add_user(str(username), str(password))
    return 'Add user {} success'.format(username)

# Product api
@app.route('/products_pagination', methods=["GET"])
def get_all_products_pagination():
    page = request.json['page']
    items_per_page = request.json['items_per_page']

    return jsonify(pd_service.get_all_products_pagination(page, items_per_page))

@app.route('/products', methods=["GET"])
def get_all_products():
    print(type(pd_service.get_all_products()))
    return jsonify(pd_service.get_all_products())

@app.route('/product', methods=["POST"])
@auth.login_required
def add_product():
    Name = request.json['Name']
    Link = request.json['Link']
    ShortDescription = request.json['ShortDescription']
    BannerImage = request.json['BannerImage']
    Title = request.json['Title']
    Content = request.json['Content']

    result = pd_service.add_product(Name,Link,ShortDescription,BannerImage,Title,Content)
    return jsonify(result)

@app.route('/product/<ProductId>', methods=["PUT"])
@auth.login_required
def update_product(ProductId):
    Name = request.json['Name']
    Link = request.json['Link']
    ShortDescription = request.json['ShortDescription']
    BannerImage = request.json['BannerImage']
    Title = request.json['Title']
   
    Content = request.json['Content']
    result = pd_service.update_product( ProductId, Name,Link,ShortDescription,BannerImage,Title,Content)
    return jsonify(result)

@app.route('/product/<ProductId>', methods=["DELETE"])
@auth.login_required
def delete_product(ProductId):
    response = pd_service.delele_product(ProductId)
    return response

# News api
@app.route('/news_pagination', methods=["POST"])
def get_all_news_pagination():
    page = request.json['page']
    items_per_page = request.json['items_per_page']
    return jsonify(new_service.get_all_news_pagination(page, items_per_page))

@app.route('/news', methods=["GET"])
def get_all_news():
    return jsonify(new_service.get_all_news())

@app.route('/new', methods=["POST"])
@auth.login_required
def add_new():
    Name = request.json['Name']
    Link = request.json['Link']
    ShortDescription = request.json['ShortDescription']
    BannerImage = request.json['BannerImage']
    Title = request.json['Title']
    Author = request.json['Author']
    TimeNew = request.json['TimeNew']
    Content = request.json['Content']
    result = new_service.add_new(Name,Link,ShortDescription,BannerImage,Title,Author,TimeNew,Content)
    return jsonify(result)

@app.route('/new/<NewId>', methods=["PUT"])
@auth.login_required
def update_new(NewId):
    Name = request.json['Name']
    Link = request.json['Link']
    ShortDescription = request.json['ShortDescription']
    BannerImage = request.json['BannerImage']
    Title = request.json['Title']
    Author = request.json['Author']
    TimeNew = request.json['TimeNew']
    Content = request.json['Content']
    result = new_service.update_new(NewId, Name,Link,ShortDescription,BannerImage,Title,Author,TimeNew,Content)
    return jsonify(result)

@app.route('/new/<NewId>', methods=["DELETE"])
@auth.login_required
def delete_new(NewId):
    response = new_service.delele_new(NewId)
    return response

if __name__ == "__main__":
    app.run(app.run(host="0.0.0.0", port=5000))
