function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log(`A nova velocidade é ${newVelocity}`)
    return newVelocity
  }
  
  let velocity = 80
  let acceleration = 5


  let NewVelocity = speedUp(velocity, acceleration)

  console.log(NewVelocity)

