// app/archive/page.tsx
import SnippetCard from "@/components/SnippetCard";

const rangedAttackCode = `extends CharacterBody2D

@onready var knife = preload("res://Scenes/knife.tscn")

@export var SPEED : int = 150
@export var JUMP_FORCE : int = 255
@export var GRAVITY : int = 900

var is_attacking = false
var can_trow = true

func _physics_process(delta):

  var direction = Input.get_axis("Left","Right")

  if direction:
    velocity.x = SPEED * direction
    if is_on_floor() and is_attacking == false:
      $Flip/AnimatedSprite2D.play("Run")
  else:
    velocity.x = 0
    if is_on_floor() and is_attacking == false:
      $Flip/AnimatedSprite2D.play("Idle")

  if direction == 1:
    $Flip.scale.x = 1
  elif direction == -1:
    $Flip.scale.x = -1

  if not is_on_floor():
    velocity.y += GRAVITY * delta
    if velocity.y > 0:
      $Flip/AnimatedSprite2D.play("Fall")

  if is_on_floor():
    if Input.is_action_just_pressed("Jump"):
      velocity.y -= JUMP_FORCE
      $Flip/AnimatedSprite2D.play("Jump")

  if Input.is_action_just_pressed("Trow"):
    if can_trow:
      can_trow = false
      $Flip/AnimatedSprite2D.play("Trow")
      is_attacking = true
      var k = knife.instantiate()
      k.vel = $Flip.scale.x
      k.global_position = $Flip/TrowPos.global_position
      get_parent().add_child(k)

  if is_attacking:
    velocity = Vector2.ZERO
    await $Flip/AnimatedSprite2D.animation_finished
    is_attacking = false
    can_trow = true

  move_and_slide()`;

const knifeCode = `extends CharacterBody2D

var SPEED : int = 300
var vel : float

func _physics_process(delta):
  move_local_x(vel * SPEED * delta)`;

const platformerCode = `extends CharacterBody2D

@export var SPEED : int = 150
@export var JUMP_FORCE: int = 255
@export var GRAVITY: int = 900

@onready var anim = $Rotate/AnimatedSprite2D

func _physics_process(delta):

  var direction = Input.get_axis("Left", "Right")
  if direction:
    velocity.x = direction * SPEED
    if is_on_floor():
      anim.play("Run")
  else:
    velocity.x = 0
    if is_on_floor():
      anim.play("Idle")

  if direction == 1:
    anim.flip_h = false
  elif direction == -1:
    anim.flip_h = true

  if not is_on_floor():
    velocity.y += GRAVITY * delta

  if Input.is_action_just_pressed("Jump") and is_on_floor():
    velocity.y -= JUMP_FORCE
    anim.play("Jump")

  move_and_slide()`;

export default function Archive() {
  return (
    <div className="max-w-7xl mx-auto px-2 py-20">
      <div className="flex">
        <h1 className="text-6xl font-zen-dots tracking-tight text-dojo mb-4">
          |
        </h1>
        <h1 className="text-6xl font-zen-dots tracking-tight text-gray-900 mb-4">
          Code Library
        </h1>
      </div>
      <p className="text-lg text-gray-500 leading-relaxed mb-12">
        An archive for my YouTube tutorials.
      </p>

      <hr className="border-gray-300 mb-10" />

      <div>
        <p className="text-sm text-gray-400 font-mono mb-6">$ snippets</p>
        <ul className="space-y-8">
          <li className="space-y-4">
            <SnippetCard
              id="code-1"
              title="2D Simple Ranged Attack"
              description="A simple Godot Engine 2D player controller with movement, jumping, gravity, animations, and a knife-throw attack."
              tags={["Godot", "GDScript"]}
              code={rangedAttackCode}
            />
            <SnippetCard
              id="code-2"
              title="Knife Code"
              description=""
              tags={[]}
              code={knifeCode}
            />
          </li>
          <li>
            <SnippetCard
              id="code-3"
              title="2D Simple Platformer Movement"
              description="A simple Godot Engine 2D player controller handling movement, jumping, gravity, sprite flipping, and animations."
              tags={["Godot", "GDScript"]}
              code={platformerCode}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
