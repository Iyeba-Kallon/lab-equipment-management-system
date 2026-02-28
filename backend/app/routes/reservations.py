from flask import Blueprint, jsonify, request
from app.models.reservation import Reservation
from app.extensions import db
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
    from datetime import datetime
    data = request.get_json()
    user_id = get_jwt_identity()
    equipment_id = data.get('equipment_id')
    start_time = datetime.fromisoformat(data.get('start_time'))
    end_time = datetime.fromisoformat(data.get('end_time'))
    
    # Check for conflicts
    conflict = Reservation.query.filter(
        Reservation.equipment_id == equipment_id,
        Reservation.status.in_(['pending', 'approved', 'active']),
        Reservation.start_time < end_time,
        Reservation.end_time > start_time
    ).first()
    
    if conflict:
        return jsonify({'message': 'Equipment is already reserved for the selected time period'}), 409
        
    reservation = Reservation(
        equipment_id=equipment_id,
        user_id=user_id,
        start_time=start_time,
        end_time=end_time,
        purpose=data.get('purpose'),
        project_name=data.get('project_name')
    )
    db.session.add(reservation)
    db.session.commit()
    
    return jsonify(reservation.to_dict()), 201
