from flask import Blueprint, jsonify, request
from backend.app.models.reservation import Reservation
from backend.app.extensions import db
from flask_jwt_extended import jwt_required

bp = Blueprint('reservations', __name__, url_prefix='/api/reservations')

@bp.route('', methods=['GET'])
@jwt_required()
def get_reservations():
    # TODO: Add filtering
    reservations = Reservation.query.all()
    return jsonify([r.to_dict() for r in reservations]), 200

@bp.route('', methods=['POST'])
@jwt_required()
def create_reservation():
    # TODO: Add conflict detection
    data = request.get_json()
    return jsonify({'message': 'Not implemented'}), 501
