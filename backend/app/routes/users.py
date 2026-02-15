from flask import Blueprint, jsonify
from backend.app.models.user import User
from flask_jwt_extended import jwt_required

bp = Blueprint('users', __name__, url_prefix='/api/users')

@bp.route('', methods=['GET'])
@jwt_required()
def get_users():
    users = User.query.all()
    return jsonify([u.to_dict() for u in users]), 200
