from backend.app.extensions import db

class UsageLog(db.Model):
    __tablename__ = 'usage_logs'

    id = db.Column(db.Integer, primary_key=True)
    equipment_id = db.Column(db.Integer, db.ForeignKey('equipment.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    reservation_id = db.Column(db.Integer, db.ForeignKey('reservations.id'), nullable=True) # Can be null if ad-hoc usage
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime)
    duration_minutes = db.Column(db.Integer)
    purpose = db.Column(db.String(255))
    notes = db.Column(db.Text)

    equipment = db.relationship('Equipment', backref=db.backref('usage_logs', lazy=True))
    user = db.relationship('User', backref=db.backref('usage_logs', lazy=True))
    reservation = db.relationship('Reservation', backref=db.backref('usage_logs', lazy=True))
