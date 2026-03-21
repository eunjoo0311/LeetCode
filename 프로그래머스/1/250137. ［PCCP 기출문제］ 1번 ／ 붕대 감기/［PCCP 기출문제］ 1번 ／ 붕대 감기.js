function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    let currentHealth = health;
    let maxHealth = health;
    let attackIndex = 0;
    let successTime = 0;
    
    const lastTime = attacks[attacks.length -1][0]
    
    for(let time = 1; time<=lastTime; time++) {
        if(attackIndex < attacks.length && time === attacks[attackIndex][0]) {
            currentHealth -= attacks[attackIndex][1]
            successTime = 0;
            
            if(currentHealth <= 0) return -1
            attackIndex++
        } else {
            currentHealth += x;
            successTime ++
            if(currentHealth > maxHealth) currentHealth = maxHealth
            if(successTime === t ) {
                currentHealth += y
                if(currentHealth > maxHealth) currentHealth = maxHealth
                successTime = 0;
            }
        }
    }
    return currentHealth
}