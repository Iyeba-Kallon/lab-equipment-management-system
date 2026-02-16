from flask import Blueprint, jsonify, request
from backend.app.models.equipment import Equipment
from backend.app.extensions import db, jwt
from flask_jwt_extended import jwt_required

bp = Blueprint('equipment', __name__, url_prefix='/api/equipment')

@bp.route('', methods=['GET'])
def get_equipment():
    # Filtering logic
    category = request.args.get('category')
    status = request.args.get('status')
    search = request.args.get('search')
    
    query = Equipment.query
    if category:
        query = query.filter_by(category=category)
    if status:
        query = query.filter_by(status=status)
    if search:
        query = query.filter(Equipment.name.ilike(f'%{search}%'))
        
    equipment_list = query.all()
    return jsonify([e.to_dict() for e in equipment_list]), 200

@bp.route('/<int:id>', methods=['GET'])
def get_equipment_detail(id):
    equipment = Equipment.query.get_or_404(id)
    return jsonify(equipment.to_dict()), 200

@bp.route('', methods=['POST'])
@jwt_required()
def create_equipment():
    data = request.get_json()
    equipment = Equipment(
        name=data.get('name'),
        category=data.get('category'),
        model_number=data.get('model_number'),
        serial_number=data.get('serial_number'),
        location=data.get('location'),
        status=data.get('status', 'available'),
        specifications=data.get('specifications'),
        image_url=data.get('image_url'),
        notes=data.get('notes')
    )
    db.session.add(equipment)
    db.session.commit()
    return jsonify(equipment.to_dict()), 201

@bp.route('/<int:id>', methods=['PUT'])
@jwt_required()
def update_equipment(id):
    equipment = Equipment.query.get_or_404(id)
    data = request.get_json()
    
    for key, value in data.items():
        if hasattr(equipment, key):
            setattr(equipment, key, value)
            
    db.session.commit()
    return jsonify(equipment.to_dict()), 200

@bp.route('/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_equipment(id):
    equipment = Equipment.query.get_or_404(id)
    db.session.delete(equipment)
    db.session.commit()
    return jsonify({'message': 'Equipment deleted'}), 200
