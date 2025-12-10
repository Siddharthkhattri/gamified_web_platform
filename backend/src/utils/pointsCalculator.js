// backend/src/utils/pointsCalculator.js

/**
 * Calculates eco points based on the action type and impact value.
 */
exports.calculateEcoPoints = (actionType, impactValue) => {
    let basePoints = 0;
    
    // Simple logic based on action type
    switch (actionType.toLowerCase()) {
        case 'planting':
            basePoints = 50 * impactValue; 
            break;
        case 'recycling':
            basePoints = 10 * impactValue; 
            break;
        case 'cleanup':
            basePoints = 100 + (20 * impactValue); 
            break;
        default:
            basePoints = 10;
    }

    return Math.max(1, Math.round(basePoints));
};