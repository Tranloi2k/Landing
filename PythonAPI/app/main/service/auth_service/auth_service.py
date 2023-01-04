import jwt
from werkzeug.security import generate_password_hash, check_password_hash
from service.users_service.users_service import get_user_by_id
import time

key = 'akacam_landingpage_vip_pro'

def hash_password(password):
    password_hash = generate_password_hash(password)
    return password_hash

def verify_password(password_hash, password):
    return check_password_hash(password_hash, password)

def generate_auth_token(id, expires_in=30):
    expire = time.time() + expires_in
    token = jwt.encode(
        {'id': id, 'exp': time.time() + expires_in},
       key , algorithm='HS256')
    return token, expire

def verify_auth_token(token):
    try:
        data = jwt.decode(token, key,
                            algorithms=['HS256'])
        user = get_user_by_id(data['id'])
        
    except:
        return
    return True, user