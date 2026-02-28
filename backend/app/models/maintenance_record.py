from app.extensions import db

class MaintenanceRecord(db.Model):
    __tablename__ = 'maintenance_records'

    id = db.Column(db.Integer, primary_key=True)
    equipment_id = db.Column(db.Integer, db.ForeignKey('equipment.id'), nullable=False)
    maintenance_date = db.Column(db.Date, nullable=False)
    maintenance_type = db.Column(db.String(50)) # preventive, corrective, upgrade
    description = db.Column(db.Text)
    performed_by = db.Column(db.String(100))
    cost = db.Column(db.Float)
    parts_replaced = db.Column(db.Text)
    next_maintenance_date = db.Column(db.Date)
    status = db.Column(db.String(20), default='completed') # completed, pending, scheduled

    equipment = db.relationship('Equipment', backref=db.backref('maintenance_records', lazy=True))
