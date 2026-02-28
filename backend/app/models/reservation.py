from app.extensions import db
from datetime import datetime

class Reservation(db.Model):
    __tablename__ = 'reservations'

    id = db.Column(db.Integer, primary_key=True)
    equipment_id = db.Column(db.Integer, db.ForeignKey('equipment.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    start_time = db.Column(db.DateTime, nullable=False, index=True)
    end_time = db.Column(db.DateTime, nullable=False, index=True)
    purpose = db.Column(db.String(255))
    project_name = db.Column(db.String(100))
    status = db.Column(db.String(20), default='pending', index=True) # pending, approved, active, completed, cancelled
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    checked_out_at = db.Column(db.DateTime)
    checked_in_at = db.Column(db.DateTime)
    notes = db.Column(db.Text)

    equipment = db.relationship('Equipment', backref=db.backref('reservations', lazy=True))
    user = db.relationship('User', backref=db.backref('reservations', lazy=True))

    def to_dict(self):
        return {
            'id': self.id,
            'equipment_id': self.equipment_id,
            'user_id': self.user_id,
            'start_time': self.start_time.isoformat(),
            'end_time': self.end_time.isoformat(),
            'status': self.status,
            'project_name': self.project_name
        }
