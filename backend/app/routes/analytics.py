from flask import Blueprint, jsonify

bp = Blueprint('analytics', __name__, url_prefix='/api/analytics')

@bp.route('/usage', methods=['GET'])
def get_usage_analytics():
    return jsonify({'message': 'Not implemented'}), 501
