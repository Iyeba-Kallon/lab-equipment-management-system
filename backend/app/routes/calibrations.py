from flask import Blueprint, jsonify, request
from app.models.calibration import Calibration
from app.extensions import db

bp = Blueprint('calibrations', __name__, url_prefix='/api/calibrations')

@bp.route('', methods=['GET'])
def get_calibrations():
    calibrations = Calibration.query.all()
    return jsonify([c.to_dict() for c in calibrations]), 200
