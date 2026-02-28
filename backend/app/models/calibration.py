from app.extensions import db

class Calibration(db.Model):
    __tablename__ = 'calibrations'

    id = db.Column(db.Integer, primary_key=True)
    equipment_id = db.Column(db.Integer, db.ForeignKey('equipment.id'), nullable=False)
    calibration_date = db.Column(db.Date, nullable=False)
    next_calibration_date = db.Column(db.Date, nullable=False)
    calibration_interval_months = db.Column(db.Integer) # 3, 6, 12, 24
    performed_by = db.Column(db.String(100))
    certificate_number = db.Column(db.String(100))
    certificate_url = db.Column(db.String(255))
    calibration_lab = db.Column(db.String(100))
    status = db.Column(db.String(20), default='valid') # valid, due_soon, overdue, failed
    results = db.Column(db.JSON) # Use db.JSON for compatibility (maps to JSONB in Postgres)
    cost = db.Column(db.Float)
    notes = db.Column(db.Text)

    equipment = db.relationship('Equipment', backref=db.backref('calibrations', lazy=True))

    def to_dict(self):
        return {
            'id': self.id,
            'equipment_id': self.equipment_id,
            'calibration_date': self.calibration_date.isoformat(),
            'next_calibration_date': self.next_calibration_date.isoformat(),
            'status': self.status,
            'calibration_lab': self.calibration_lab
        }
