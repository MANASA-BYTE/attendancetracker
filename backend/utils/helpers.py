# You can add future helpers here, e.g., converting time, formatting results, etc.
def format_date(date_str):
    from datetime import datetime
    return datetime.strptime(date_str, "%Y-%m-%d")
