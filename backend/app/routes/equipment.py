from flask import Blueprint, jsonify, request
from backend.app.models.equipment import Equipment
from backend.app.extensions import db, jwt
from flask_jwt_extended import jwt_required

bp = Blueprint('equipment', __name__, url_prefix='/api/equipment')

@bp.route('', methods=['GET'])
def get_equipment():
    # TODO: Add filtering and pagination
    equipment_list = Equipment.query.all()
    return jsonify([e.to_dict() for e in equipment_list]), 200

@bp.route('/<int:id>', methods=['GET'])
def get_equipment_detail(id):
    equipment = Equipment.query.get_or_404(id)
    return jsonify(equipment.to_dict()), 200

@bp.route('', methods=['POST'])
@jwt_required()
def create_equipment():
    # TODO: Check for admin/manager role
    data = request.get_json()
    # Add validation here
    equipment = Equipment(
        name=data.get('name'),
        category=data.get('category'),
        model_number=data.get('model_number'),
        serial_number=data.get('serial_number'),
        location=data.get('location'),
        status=data.get('status', 'available'),
        specifications=data.get('specifications'),
        image_url=data.get('image_url')
    )
    db.session.add(equipment)
    db.session.commit()
    return jsonify(equipment.to_dict()), 201
